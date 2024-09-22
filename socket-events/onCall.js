import { io } from '../server.js'

const onCall = async (participants) => {
    if (participants.receiver.socketId) {
        console.log("onCall")
        io.to(participants.receiver.socketId).emit('incomingCall', participants)
    }
}
export default onCall;