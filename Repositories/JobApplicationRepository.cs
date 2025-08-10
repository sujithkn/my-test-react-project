using Microsoft.EntityFrameworkCore;
using JobApplicationTracker.Model;
using JobApplicationTracker.Data;


namespace JobApplicationTracker.Repositories
{
    public class JobApplicationRepository : IJobApplicationRepository
    {
        private readonly ApplicationDbContext _context;

        public JobApplicationRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<JobApplication>> GetAllAsync()
        {
            return await _context.JobApplications.ToListAsync();
        }

        public async Task<JobApplication?> GetByIdAsync(int id)
        {
            return await _context.JobApplications.FindAsync(id);
        }

        public async Task<JobApplication> AddAsync(JobApplication application)
        {
            _context.JobApplications.Add(application);
            await _context.SaveChangesAsync();
            return application;
        }
    }
}
