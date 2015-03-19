/**
 * Created by ystyle on 15-3-18.
 */
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

accountsUIBootstrap3.setLanguage('zh');

accountsUIBootstrap3.map('zh', {
    resetPasswordDialog: {                                                                                                // 2
        title: "重置密码",                                                                                        // 3
        newPassword: "新密码",                                                                                         // 4
        cancel: "取消",                                                                                                    // 5
        submit: "确定"                                                                                               // 6
    },                                                                                                                    // 7
    enrollAccountDialog: {                                                                                                // 8
        title: "选择一个密码",                                                                                          // 9
        newPassword: "新密码",                                                                                         // 10
        cancel: "取消",                                                                                                     // 11
        submit: "确定"                                                                                               // 12
    },                                                                                                                    // 13
    justVerifiedEmailDialog: {                                                                                            // 14
        verified: "Email地址验证",                                                                                  // 15
        dismiss: "失败"                                                                                                   // 16
    },                                                                                                                    // 17
    loginButtonsMessagesDialog: {                                                                                         // 18
        dismiss: "失败"                                                                                            // 19
    },                                                                                                                    // 20
    loginButtonsLoggedInDropdownActions: {                                                                                // 21
        password: "更改密码",                                                                                         // 22
        signOut: "退出"                                                                                                  // 23
    },                                                                                                                    // 24
    loginButtonsLoggedOutDropdown: {                                                                                      // 25
        signIn: "登陆",                                                                                                   // 26
        up: "注册"                                                                                                           // 27
    },                                                                                                                    // 28
    loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
        or: "或"                                                                                                             // 30
    },                                                                                                                    // 31
    loginButtonsLoggedOutPasswordService: {                                                                               // 32
        create: "新建",                                                                                                    // 33
        signIn: "登陆",                                                                                                   // 34
        forgot: "忘记密码?",                                                                                          // 35
        createAcc: "新建用户"                                                                                          // 36
    },                                                                                                                    // 37
    forgotPasswordForm: {                                                                                                 // 38
        email: "Email",                                                                                                      // 39
        reset: "重置密码",                                                                                             // 40
        invalidEmail: "email格式不正确"                                                                                        // 41
    },                                                                                                                    // 42
    loginButtonsBackToLoginLink: {                                                                                        // 43
        back: "取消"                                                                                                       // 44
    },                                                                                                                    // 45
    loginButtonsChangePassword: {                                                                                         // 46
        submit: "更改密码",                                                                                           // 47
        cancel: "取消"                                                                                                     // 48
    },                                                                                                                    // 49
    loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
        signInWith: "登陆以",                                                                                          // 51
        configure: "配置"                                                                                            // 52
    },                                                                                                                    // 53
    loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
        signOut: "退出"                                                                                                  // 55
    },                                                                                                                    // 56
    loginButtonsLoggedOut: {                                                                                              // 57
        noLoginServices: "没有配置登录服务"                                                                      // 58
    },                                                                                                                    // 59
    loginFields: {                                                                                                        // 60
        usernameOrEmail: "用户名或者Email",                                                                                // 61
        username: "用户名",                                                                                                // 62
        email: "Email",                                                                                                      // 63
        password: "密码"                                                                                                 // 64
    },                                                                                                                    // 65
    signupFields: {                                                                                                       // 66
        username: "用户名",                                                                                                // 67
        email: "Email",                                                                                                      // 68
        emailOpt: "Email (可选)",                                                                                        // 69
        password: "密码",                                                                                                // 70
        passwordAgain: "重复密码"                                                                                    // 71
    },                                                                                                                    // 72
    changePasswordFields: {                                                                                               // 73
        currentPassword: "当前密码",                                                                                 // 74
        newPassword: "新密码",                                                                                         // 75
        newPasswordAgain: "重复新密码"                                                                             // 76
    },                                                                                                                    // 77
    infoMessages : {                                                                                                      // 78
        emailSent: "发送Email",                                                                                             // 79
        passwordChanged: "密码更改成功"                                                                                  // 80
    },                                                                                                                    // 81
    errorMessages: {                                                                                                      // 82
        userNotFound: "用户不存在",                                                                                      // 83
        invalidEmail: "email格式不正确",                                                                                       // 84
        incorrectPassword: "密码错误",                                                                             // 85
        usernameTooShort: "用户名必需大于3位",                                                     // 86
        passwordTooShort: "密码必需大于6位",                                                     // 87
        passwordsDontMatch: "密码输入不一致",                                                                         // 88
        newPasswordSameAsOld: "新密码和旧的不能一样",                                                     // 89
        signupsForbidden: "没有权限"                                                                                // 90
    }
});