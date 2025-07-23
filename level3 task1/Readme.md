# 🛒 eCommerce Web Application

A complete eCommerce web application developed using **PHP** and **MySQL**, designed to facilitate product browsing, user authentication, shopping cart management, wishlist functionality, and a streamlined checkout process.

---

## 🔧 Tech Stack

- **Frontend**: HTML5, CSS3  
- **Backend**: PHP  
- **Database**: MySQL  
- **Development Environment**: XAMPP / WAMP / MAMP

---

## ✅ Features

- User registration and login system  
- Product listing with category filtering and search  
- Shopping cart and wishlist management  
- Order placement and checkout functionality  
- Quick view modal for product details  
- Contact and About pages  
- Pre-configured SQL file for database setup (`shop_db.sql`)  

---

## 📸 Screenshots


### 🛒 Add Product Page  
![Add Product Page](https://github.com/Vishva2705/CODSOFT/blob/main/level3%20task1/WhatsApp%20Image%202025-07-23%20at%2022.23.16_3f537f9d.jpg?raw=true)

### 🔐 Login Page  
![Login Page](https://github.com/Vishva2705/CODSOFT/blob/main/level3%20task1/WhatsApp%20Image%202025-07-23%20at%2022.23.16_c212e80c.jpg?raw=true)

### 🏠 Home Page  
![Home Page](https://github.com/Vishva2705/CODSOFT/blob/main/level3%20task1/WhatsApp%20Image%202025-07-23%20at%2022.23.16_665d62e1.jpg?raw=true)

---

## 📁 Project Structure

projectdone/  
├── about.php  
├── cart.php  
├── category.php  
├── checkout.php  
├── contact.php  
├── home.php  
├── orders.php  
├── quick_view.php  
├── search_page.php  
├── shop.php  
├── shop_db.sql  
├── update_user.php  
├── user_login.php  
├── user_register.php  
└── wishlist.php  

---

## 🚀 Getting Started

### Prerequisites

- Local server (XAMPP / WAMP / MAMP)  
- PHP 7.x or higher  
- MySQL server  
- Web browser (e.g., Chrome, Firefox)

---

### Installation Steps

1. **Clone the Repository**

   git clone https://github.com/yourusername/projectdone.git  
   Or manually download and extract the ZIP file.

2. **Move to Server Directory**

   Copy the `projectdone` folder to your local server directory:  
   C:/xampp/htdocs/  (for XAMPP users)

3. **Import the Database**

   - Open http://localhost/phpmyadmin  
   - Create a new database named `shop_db`  
   - Import the `shop_db.sql` file from the project folder

4. **Configure Database Connection**

   Ensure the following credentials are set in the PHP files:

   $hostname = "localhost";  
   $username = "root";  
   $password = "";  
   $database = "shop_db";  

5. **Run the Application**

   Open your browser and go to:  
   http://localhost/projectdone/home.php  

---

## 📌 Developer Notes

- Include `session_start()` on pages that require user sessions  
- You may integrate Bootstrap or Tailwind CSS for improved UI  
- For better security, use **MySQLi** or **PDO** with prepared statements  

---

## 👤 Author

**Vishva** – Web Developer  
📫 vishvarajendran05@gmail.com  

---

## 📝 License

This project is intended for educational and demo purposes only.  
You are free to modify and use it for learning or portfolio development.
