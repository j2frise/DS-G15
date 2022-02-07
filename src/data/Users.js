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
            return users.findIndex(x => x.email ===getUser.email);
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

function resetMyPassword(data) {
    const users = getSession().users
    const getUser = users[getSession().id];
    if(getUser.password != data.old){
        return "Mot de passe incorrect";
    } else {
        for (const key in users) {
            if (Object.hasOwnProperty.call(users, key)) {
                const element = users[key];
                element.password = data.password;
            }
        }
        setSession({
            ...getSession(),
            users
        })
        return "success";
    }
}

function getUserConnect() {
    return getSession().users[getSession().id]
}

function users() {
    return getSession().users
}


export {signin, signup, forgotemail, getUserConnect, users, resetMyPassword}