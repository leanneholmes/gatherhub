using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, and 1 non-alphanumeric character.")]
        public string Password { get; set; }
        [Required]
        public string DisplayName { get; set; }
        [Required]
        public string Username { get; set; }
    }
}