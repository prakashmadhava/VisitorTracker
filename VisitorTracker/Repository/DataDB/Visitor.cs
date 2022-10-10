using System;
using System.Collections.Generic;

namespace Repository.DataDB
{
    public partial class Visitor
    {
        public Visitor()
        {
            VisaDetails = new HashSet<VisaDetail>();
        }

        public Guid Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string PassportNo { get; set; } = null!;
        public DateTime PassportValidFrom { get; set; }
        public DateTime PassportValidTo { get; set; }
        public string Nationality { get; set; } = null!;
        public bool EntryApproved { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; } = null!;
        public DateTime? ModifiedDate { get; set; }
        public string? ModifiedBy { get; set; }
        public bool IsEUVisitor { get; set; }

        public virtual ICollection<VisaDetail>? VisaDetails { get; set; }
    }
}
