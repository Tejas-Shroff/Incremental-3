using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
 
   
    [ApiController]
    [Route("/[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly ApplicationDbContext context;
    //    ApplicationDbContext context = new ApplicationDbContext();
 
        public PlayerController(ApplicationDbContext _context)
        {
            context = _context;
        }
        [HttpPost]
        [Route("AddPlayer")]
        public IActionResult Post(Player Player)
        {
            if(ModelState.IsValid)
            {
                try{
                    context.Players.Add(Player);
                    context.SaveChanges();
 
                }
                catch(System.Exception ex){
                    return BadRequest(ex.InnerException.Message);
 
                }
            }
            return Created("Record Added", Player);
 
        }
 
        [HttpPut]
        [Route("EditPlayer/{id}")]
        public IActionResult PutPlayer(int id, Player Player)
        {
            if(ModelState.IsValid)
            {
                Player mv = context.Players.Find(id);
                mv.Name = Player.Name;
                mv.Age = Player.Age;
                mv.Category = Player.Category;
                mv.BiddingPrice = Player.BiddingPrice;
                context.SaveChanges();
                return Ok();
               
 
 
 
            }
            return BadRequest("Unable to Edit Record");
        }
 
        [HttpDelete]
        [Route("DeletePlayer/{id}")]
        public IActionResult DeletePlayer(int id)
        {
 
                var data=context.Players.Find(id);
                context.Players.Remove(data);
                context.SaveChanges();
                return Ok();
 
           
        }
 
        [HttpGet]
        [Route("DisplayTeamPlayers/(id)")]
 
        public IActionResult GetMovieDetail(int id)
        {
            var data = from d in context.Players where d.TeamId == id select new{
                Name = d.Name, Age = d.Age, Category = d.Category, BiddingPrice = d.BiddingPrice};
                return Ok(data);
        }

        
 
    }
}


