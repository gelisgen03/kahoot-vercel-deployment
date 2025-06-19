import io from 'socket.io-client';
export const socket = io('https://kahootclonebackend.onrender.com', { withCredentials: true });