using VisitorTrackerAPI.Models.Interface;
using VisitorTrackerAPI.Models;

namespace VisitorTrackerAPI.Models
{
    public class Visitor : IVisitor
    {
        public Guid Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PassportNo { get; set; }
        public DateTime PassportValidFrom { get; set; }
        public DateTime PassportValidTo { get; set; }
        public string Nationality { get; set; }
        public bool EntryApproved { get; set; }
        public int IsEUVisitor { get; set; }

        public VisaDetails? visaDetails { get; set; }
    }
}
