using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
 
namespace dotnetapp.Models
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public virtual DbSet<Player> Players {get;set;}
        public virtual DbSet<Team> Teams {get;set;}
        public virtual DbSet<User> Users {get;set;}
 
        public ApplicationDbContext () {}
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
 
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("User ID=sa;password=examlyMssql@123; server=localhost;Database=PlayerDb;trusted_connection=false;Persist Security Info=False;Encrypt=False");
            }
        }
 
     
       
    }
}
