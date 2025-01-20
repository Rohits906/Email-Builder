# 🌟 Email Builder

A **React.js** email editor with a **Node.js** backend to craft stunning and customizable email templates effortlessly.

---

## 🚀 How to Launch This Project

### 🔧 Client Configuration

1. **Set Homepage URL**  
   - Navigate to `client/package.json`.  
   - Update the `homepage` key with your desired URL.

2. **Configure Server URL**  
   - Open `client/config/index.js`.  
   - Replace the `SERVER_URL` value with your server's domain.

3. **Run the Client**  
   - Open the `client` directory in your terminal.  
   - Execute:  
     ```bash
     npm run start
     ```

> 📖 For detailed steps, check the `README.md` inside the `client` directory.

---

### 🔧 Server Configuration

1. **Create Environment File**  
   - Navigate to the `server` directory.  
   - Create a `.env` file.  
   - Copy the variables from `.env.example` and paste them into `.env`.  
   - Update the credentials as required.

2. **Add Firebase Config**  
   - Go to `server/cert`.  
   - Paste your Firebase admin configuration file here.

3. **Run the Server**  
   - Open the `server` directory in your terminal.  
   - Execute:  
     ```bash
     npm run start
     ```

---

## 🛠️ Features

- Intuitive drag-and-drop email template creation.
- Fully customizable components.
- Backend integration with Firebase for secure data handling.

---

## 📁 Project Structure

```
Email Builder
├── client          # Frontend codebase
│   ├── public      # Static assets
│   ├── src         # React components
├── server          # Backend codebase
│   ├── cert        # Firebase configuration
│   ├── routes      # API endpoints
```

---

## 🎉 Get Started

1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo/email-builder.git
   ```
2. Follow the **Client Configuration** and **Server Configuration** steps above.
3. Build beautiful email templates!

---

## 📢 Contributions & Support

Feel free to submit pull requests or open issues. For questions or help, reach out at [rohitsoni7038@gmail.com].

