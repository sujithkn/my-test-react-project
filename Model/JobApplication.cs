namespace JobApplicationTracker.Model
{
    public class JobApplication
    {
        public int Id { get; set; }
        public string ApplicantName { get; set; }
        public string Position { get; set; }
        public string Status { get; set; } // e.g., Applied, Interviewed, Offered, Rejected
        public DateTime AppliedOn { get; set; }
        public DateTime? InterviewDate { get; set; } // Nullable if no interview scheduled
        //public string Notes { get; set; } // Additional notes about the application
        // Constructor to initialize the application with default values
        public JobApplication()
        {
            AppliedOn = DateTime.Now;
            Status = "Applied"; // Default status when a new application is created
        }
    }
}
