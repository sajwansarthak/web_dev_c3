import { atom , selector } from "recoil"
import { axios} from "axios"

//Asynchronous Data Queries
export const notifications = atom ({
    key:"networkAtom",
    default: selector({
        key:"NetworkAtomSelector",
        get: async () =>{
            //await new Promise ( r => setTimeout( r,5000)) // sleep for 5 sec
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) => {
        const allNotification = get(notifications);
        return allNotification.network + 
        allNotification.jobs +
        allNotification.messaging +
        allNotification.notifications
    }
})