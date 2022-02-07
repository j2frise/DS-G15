import { getSession, setSession } from "../context/session"
import { search } from "../utils";

function signin(data) {
    const users = getSession().users;
    const getUser = search(data.email, "email", users);
    console.log(getUser);
    if(!getUser){
        return "Email non trouvé";
    } else {
        if(getUser.password != data.password){
            return "Mot de passe incorrect";
        } else {
            return "success";
        }
    }
}

function signup(data) {
    const users = getSession().users;
    if(search(data.email, "email", users)){
        return "Cet utilisateur existe déjà";
    } else {
        users.push(data)
        setSession({
            ...getSession(),
            users
        })
        return "success";
    }
}

function forgotemail(data) {
    const users = getSession().users;
    const getUser = search(data.email, "email", users);
    if(!getUser){
        return "Email non trouvé";
    } else {
        for (const key in users) {
            if (Object.hasOwnProperty.call(users, key)) {
                const element = users[key];
                element.password = "1234";
            }
        }
        setSession({
            ...getSession(),
            users
        })
        return "success";
    }
}

export {signin, signup, forgotemail}