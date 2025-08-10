using JobApplicationTracker.Model;

namespace JobApplicationTracker.Repositories
{
    public interface IJobApplicationRepository
    {
        Task<IEnumerable<JobApplication>> GetAllAsync();
        Task<JobApplication?> GetByIdAsync(int id);
        Task<JobApplication> AddAsync(JobApplication application);
    }
}
