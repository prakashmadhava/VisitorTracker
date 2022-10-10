namespace VisitorTrackerAPI.Models.Interface
{
    public interface IVisaDetails
    {        
        public string VisaNo { get; set; }
        public DateTime VisaValidFrom { get; set; }
        public DateTime VisaValidTo { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime ExitDate { get; set; }
        public string BiometricNo { get; set; }
        public int NumberOfPreviousVisits { get; set; }
    }
}
