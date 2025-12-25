// Lấy các phần tử từ HTML
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// Tài khoản demo để kiểm tra
const demoAccount = {
    username: 'admin',
    password: '123456'
};

// Hàm hiển thị thông báo
function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = 'message ' + type;

    // Ẩn thông báo sau 5 giây
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Hàm kiểm tra tên đăng nhập
function validateUsername(username) {
    if (username.length === 0) {
        return 'Vui lòng nhập tên đăng nhập';
    }
    if (username.length < 3) {
        return 'Tên đăng nhập phải có ít nhất 3 ký tự';
    }
    return null; // Không có lỗi
}

// Hàm kiểm tra mật khẩu
function validatePassword(password) {
    if (password.length === 0) {
        return 'Vui lòng nhập mật khẩu';
    }
    if (password.length < 6) {
        return 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    return null; // Không có lỗi
}

// Xử lý khi submit form
loginForm.addEventListener('submit', function (event) {
    // Ngăn form tự động gửi đi
    event.preventDefault();

    // Lấy giá trị từ các ô input
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Kiểm tra tên đăng nhập
    const usernameError = validateUsername(username);
    if (usernameError) {
        showMessage(usernameError, 'error');
        usernameInput.focus();
        return;
    }

    // Kiểm tra mật khẩu
    const passwordError = validatePassword(password);
    if (passwordError) {
        showMessage(passwordError, 'error');
        passwordInput.focus();
        return;
    }

    // Kiểm tra thông tin đăng nhập với tài khoản demo
    if (username === demoAccount.username && password === demoAccount.password) {
        showMessage('Đăng nhập thành công! Chào mừng bạn.', 'success');

        // chuyển hướng đến trang chủ
        setTimeout(() => {
            console.log('Chuyển hướng đến trang chủ...');
            // window.location.href = 'home.html';
        }, 2000);
    } else {
        showMessage('Tên đăng nhập hoặc mật khẩu không đúng!', 'error');
    }
});

// Thêm hiệu ứng khi nhập liệu
usernameInput.addEventListener('input', function () {
    messageDiv.style.display = 'none';
});

passwordInput.addEventListener('input', function () {
    messageDiv.style.display = 'none';
});

// Hiển thị thông tin tài khoản demo khi trang load
window.addEventListener('load', function () {
    console.log('=== THÔNG TIN TÀI KHOẢN DEMO ===');
    console.log('Tên đăng nhập:', demoAccount.username);
    console.log('Mật khẩu:', demoAccount.password);
    console.log('================================');
});
