
const { createQueue } = require('./index')

function createPriorityQueue() {
   //create two queue in closure
   const lowPriorityQueue = createQueue()
   const highPriorityQueue = createQueue()

  return {
    // enqueue 
    enqueue(item, isHighPriority = false) {
       isHighPriority
         ? highPriorityQueue.enqueue(item)
         : lowPriorityQueue.enqueue(item)
    },
     // dequeue 
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }

      return lowPriorityQueue.dequeue()
    },
    // peek 
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek()
      }

      return lowPriorityQueue.peek()      
    },
    // length 
    length() {

      return (
      highPriorityQueue.length +
      lowPriorityQueue.length
      )
    },
    // isEmpty
    isEmpty() {
      return (
        highPriorityQueue.isEmpty() &&
        lowPriorityQueue.isEmpty()
      )
    }
  }
}

const q = createPriorityQueue()

q.enqueue('Hola amigos')

