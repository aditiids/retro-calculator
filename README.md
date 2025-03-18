

# 🧮 Retro Calculator  
A pixel-styled retro calculator built using **Electron.js**, featuring a nostalgic look with custom SVG buttons and a fully functional display.  

---

## 🚀 **Features**
✅ Stylish **retro design** with pixel-style buttons  
✅ Supports **basic arithmetic operations**: addition, subtraction, multiplication, and division  
✅ **Clear (C)** and **delete (E)** functions for easy corrections  
✅ Smooth **numeric display** with consistent font styling  
✅ Packaged as a **desktop app** using Electron.js  

---

## 🛠️ **Tech Stack**
- **Electron.js**: For building the desktop application  
- **HTML5 & CSS3**: Structure and styling  
- **JavaScript (Vanilla)**: Logic handling and event listeners  
- **SVG assets**: For pixel-style buttons and backgrounds  

---

## ⚙️ **Installation & Usage**
### 1. **Clone the repository**
```bash
git clone <YOUR_REPO_URL>
cd retro-calculator

2. Install dependencies

Make sure you have Node.js installed.
Then, run:

npm install

3. Start the application

npm start
```



⸻

## 🖼️ **Screenshots**
![Calculator Preview](./assets/Calculator.svg)


⸻

## 📁 **Folder Structure**

/assets  
 └── /Calculator   → SVG buttons and background images  
/src  
 ├── main.js       → Electron main process file  
 ├── preload.js    → Preload script for secure API handling  
 └── renderer.js   → Handles calculator logic and DOM interactions  
index.html         → Calculator UI  
README.md          → Project documentation  
package.json       → Project dependencies and metadata  



⸻

##  🛠️ **How It Works**
	1.	Electron Initialization:
	•	main.js creates the main window and loads the index.html file.
	2.	Preload Script:
	•	Ensures safe communication between the renderer process and Electron’s main process.
	3.	Logic Handling:
	•	renderer.js handles all the button clicks, performs calculations, and updates the display.
	4.	Styling:
	•	Pixel-style UI with custom fonts and SVG buttons.

⸻

## 👩‍💻 **Contributing**

Feel free to fork the project and submit pull requests!
If you find any bugs or have suggestions, open an issue.

⸻

## ❤️ **Acknowledgements**
	•	Electron.js for making cross-platform apps easy.
	•	Google Fonts for the pixel-style fonts.

⸻

## 📜 **License**

This project is licensed under the MIT License.

---
