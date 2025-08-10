using JobApplicationTracker.Model;
using JobApplicationTracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationTracker.Controllers
{
    public class ApplicationsController : ControllerBase
    {
        private readonly IJobApplicationRepository _repository;

        public ApplicationsController(IJobApplicationRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetAll()
        {
            var apps = await _repository.GetAllAsync();
            return Ok(apps);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<JobApplication>> GetById(int id)
        {
            var app = await _repository.GetByIdAsync(id);
            if (app == null) return NotFound();
            return Ok(app);
        }

        [HttpPost]
        public async Task<ActionResult<JobApplication>> Add(JobApplication application)
        {
            application.AppliedOn = DateTime.UtcNow;
            var created = await _repository.AddAsync(application);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

    }
}
