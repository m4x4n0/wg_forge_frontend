import { users } from "./getData";

export function getUser(userId) {
   return users.find(user => {
        if (user.id === userId) {
            // Make an user name representation
            user.getUserName = function getUserName() {
                return `${user.first_name} ${user.last_name}`;
            }
            user.getUserNameWithPrefix = function getUserNameWithPrefix() {
                return `${user.gender === 'Male' ? 'Mr.' : 'Ms.'} ${user.getUserName()}`;
            }
            return user;
        }
   });

}
