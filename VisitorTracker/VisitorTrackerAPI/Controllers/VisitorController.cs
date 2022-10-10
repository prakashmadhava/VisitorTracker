using Microsoft.AspNetCore.Mvc;
using System.Net;
using Repository.DataDB;
using Repository.Repositories;

namespace VisitorTrackerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VisitorController : ControllerBase
    {
        private readonly ILogger<VisitorController> _logger;
        private IVisitorRepository visitorRepository;

        public VisitorController(ILogger<VisitorController> logger, IVisitorRepository visitorRepository)
        {
            _logger = logger;
            this.visitorRepository = visitorRepository;
        }
        
        [HttpPost(Name = "Visitor")]
        public ActionResult<Visitor> Post([FromBody] Visitor visitor)
        {
            try
            {
                if (visitor == null) return BadRequest();

                var response = visitorRepository.Create(visitor);

                if (response == null)
                    return BadRequest("Unable to Submit request");

                return Ok(response);
            }
            catch(Exception ex)
            {
                _logger.Log(LogLevel.Error, ex.Message);
                return BadRequest("There is a problem with the application, contact your system administrator, Error: " + ex.Message);
            }
        }

        [HttpGet(Name = "GetVisitor")]
        public ActionResult<IEnumerable<Visitor>> GetAll()
        {
            try
            {
                var response = visitorRepository.GetAll().ToList();

                if (response == null)
                    return BadRequest("Unable to retrive details");

                return Ok(response);
            }
            catch(Exception ex)
            {
                _logger.Log(LogLevel.Error, ex.Message);
                return BadRequest("There is a problem with the application, contact your system administrator, Error: " + ex.Message);
            }
        }

        [HttpPut("{id:guid}")]
        public ActionResult<Visitor> Put([FromRoute] Guid id, [FromBody] Visitor visitor)
        {
            try
            {
                var responce = visitorRepository.Update(id, visitor);

                if (responce == null)
                    return BadRequest("Unable to update details");

                return Ok(responce);
            }
            catch(Exception ex)
            {
                _logger.Log(LogLevel.Error, ex.Message);
                return BadRequest("There is a problem with the application, contact your system administrator, Error: " + ex.Message);
            }

        }
    }
}