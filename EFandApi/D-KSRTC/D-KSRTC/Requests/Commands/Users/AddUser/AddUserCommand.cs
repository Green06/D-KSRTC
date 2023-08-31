﻿using D_KSRTC.Models;
using MediatR;
using System.ComponentModel.DataAnnotations;

namespace D_KSRTC.Requests.Commands.Users.AddUser
{
    public class AddUserCommand :IRequest<User>
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public AddUserCommand(string firstname,string lastname,string email, string password, string phonenumber, string address)
        {
            FirstName = firstname;
            LastName = lastname;
            Email = email;  
            Password = password;
            PhoneNumber = phonenumber;
            Address = address;
        }
    }
}
