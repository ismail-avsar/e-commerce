const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const passwords = [
    "Admin123!",       // Should pass
    "admin123!",       // Fail: no uppercase
    "Admin123",        // Fail: no special char
    "Admin123.",       // Should pass now
    "Admin123#",       // Should pass now
    "Password-123",    // Should pass now
    "Password_123",    // Should pass now
    "Short1!",         // Fail: too short (if length checked by regex, but minLength handles it too. Regex here has .{8,})
];

passwords.forEach(p => {
    console.log(`'${p}': ${regex.test(p)}`);
});
