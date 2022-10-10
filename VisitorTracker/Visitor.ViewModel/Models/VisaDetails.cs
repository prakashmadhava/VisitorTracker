using VisitorTrackerAPI.Models.Interface;
namespace VisitorTrackerAPI.Models
{
    public class VisaDetails : IVisaDetails
    {        
        public int Id { get; set; }
        public string VisaNo { get; set; }
        public DateTime VisaValidFrom { get; set; }
        public DateTime VisaValidTo { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime ExitDate { get; set; }
        public string BiometricNo { get; set; }
        public int NumberOfPreviousVisits { get; set; }
    }
}
