import Dexie from 'dexie';

// Set up Dexie.js database
export const db = new Dexie('RoomsDatabase');
db.version(1).stores({ rooms: '++id,position,width,length,wallColor,floorColor' });

// Function to generate a room
const generateRoom = async () => {
    const position = [Math.random() * 100, 0, Math.random() * 100]; // Random position
    const width = Math.random() * 10 + 5; // Random width between 5 and 15
    const length = Math.random() * 10 + 5; // Random length between 5 and 15
    const wallColor = generateRandomColor();
    const floorColor = generateRandomColor();

    // Save the room in the database
    const id = await db.rooms.add({ position, width, length, wallColor, floorColor });

    return { id, position, width, length, wallColor, floorColor };
}

// Function to generate random color
const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Generate rooms
for (let i = 0; i < 10; i++) {
    generateRoom();
}