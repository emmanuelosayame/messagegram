export const chats = [
  { id: '1', sender: 'Lamar', receiver: 'Nutella', body: 'Hey' },
  { id: '2', sender: 'Lamar', receiver: 'Dave', body: "What'sup gee" },
  { id: '3', sender: 'Lamar', receiver: 'Lamar', body: 'Yoo' },
  { id: '4', sender: 'Lamar', receiver: 'Maher📦', body: 'Hi Chief' },
  { id: '5', sender: 'Lamar', receiver: '0334999995', body: 'Yoo' },
  { id: '6', sender: 'Lamar', receiver: 'Metro Booming', body: 'Wagwan' },
];

export type Chat = (typeof chats)[0];
