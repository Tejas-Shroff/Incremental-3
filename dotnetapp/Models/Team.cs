using System.ComponentModel.DataAnnotations;
namespace dotnetapp.Models{
    public class Team {
        [Key]
        public int TeamId { get; set; }
        public string? TeamName { get; set; }
        public ICollection<Player>? Player { get; set; }
    }
}