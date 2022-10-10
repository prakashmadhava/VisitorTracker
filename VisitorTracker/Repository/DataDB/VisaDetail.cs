using System;
using System.Collections.Generic;

namespace Repository.DataDB
{
    public partial class VisaDetail
    {
        public Guid VisaId { get; set; }
        public Guid VisitorId { get; set; }
        public string VisaNo { get; set; } = null!;
        public DateTime VisaValidFrom { get; set; }
        public DateTime VisaValidTo { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime? ExitDate { get; set; }
        public string BiometricNo { get; set; } = null!;
        public int NumberOfPreviousVisits { get; set; }
        public DateTime CreateDate { get; set; } 
        public string CreatedBy { get; set; } = null!;
        public string? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
