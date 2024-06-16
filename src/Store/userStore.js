import {create } from 'zustand';

const userStore = (set) => ({
  username:"",

  captureUsername: (newName) => {
    set(() => {
        return { username: newName }
    });
  }
});
const useuserstore = create (userStore)
export default useuserstore
