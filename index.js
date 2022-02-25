//queues
function createQueue() {
   const queue = []
   return {
      // add or enqueue
      enqueue(item) {
         queue.unshift(item)
      },
      //remove or dequeue
      dequeue() {
         return queue.pop()
      },
      //peek
      peek() {
         return queue[queue.length - 1]
      },
      //lenght
      getLenght() {
         return queue.length
      },
      //isEmpty
      isEmpty() {
         return queue.length === 0
      }
   }
}

const q = createQueue()

q.enqueue('Hello dear')
q.enqueue('Hello Sr ice cream')
q.enqueue('Hello Nice')
q.enqueue('Hello Peie')
q.enqueue('Hello rtt')
q.enqueue('Hello pooo')
q.dequeue()



exports.createQueue = createQueue
