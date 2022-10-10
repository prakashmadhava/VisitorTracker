using Repository.DataDB;

namespace Repository.Repositories
{
    public class VisitorRepository : IVisitorRepository
    {        
        private VisitorDBContext visitorContext;
        public VisitorRepository(VisitorDBContext visitorContext)
        {
            this.visitorContext = visitorContext;            
        }

        public IEnumerable<Visitor> GetAll()
        {
            var visitors = new List<Visitor>();

            foreach(var item in visitorContext.Visitors)
            {
                var visaDetails = visitorContext.VisaDetails.ToList().FindAll((item)=> item.VisitorId == item.VisitorId);

                visitors.Add(new Visitor
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    PassportNo = item.PassportNo,
                    PassportValidFrom = item.PassportValidFrom,
                    PassportValidTo = item.PassportValidTo,
                    Nationality = item.Nationality,
                    EntryApproved = item.EntryApproved,
                    CreatedDate = item.CreatedDate,
                    CreatedBy = item.CreatedBy,
                    ModifiedDate = item.ModifiedDate,
                    ModifiedBy = item.ModifiedBy,
                    IsEUVisitor = item.IsEUVisitor,
                    VisaDetails = visaDetails
                });                
            }
            return visitors;
        }

        public Visitor Get(Guid id)
        {            
            var item = visitorContext.Visitors.ToList().Find((visitor) => visitor.Id == id);

            if (item == null)
                return null;

            var visitor = new Visitor
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                PassportNo = item.PassportNo,
                PassportValidFrom = item.PassportValidFrom,
                PassportValidTo = item.PassportValidTo,
                Nationality = item.Nationality,
                EntryApproved = item.EntryApproved,
                CreatedDate = item.CreatedDate,
                CreatedBy = item.CreatedBy,
                ModifiedDate = item.ModifiedDate,
                ModifiedBy = item.ModifiedBy,
                IsEUVisitor = item.IsEUVisitor
            };

            return visitor;
        }

        public Visitor Create(Visitor visitor)
        {
            visitorContext.Visitors.Add(new Visitor
            {
                Id = visitor.Id,
                FirstName = visitor.FirstName,
                LastName = visitor.LastName,
                PassportNo = visitor.PassportNo,
                PassportValidFrom = visitor.PassportValidFrom,
                PassportValidTo = visitor.PassportValidTo,
                Nationality = visitor.Nationality,
                EntryApproved = visitor.EntryApproved,
                CreatedDate = DateTime.Now,
                CreatedBy = visitor.CreatedBy,
                ModifiedDate = DateTime.Now,
                ModifiedBy = visitor.ModifiedBy,
                IsEUVisitor = visitor.IsEUVisitor,
            });

            if (!visitor.IsEUVisitor)
            {
                var visaDetails = visitor.VisaDetails?.FirstOrDefault();

                if(visaDetails != null)
                {
                    visitorContext.VisaDetails.Add(new VisaDetail
                    {
                        VisaId = visaDetails.VisaId,
                        VisitorId = visaDetails.VisitorId,
                        VisaNo = visaDetails.VisaNo,
                        VisaValidFrom = visaDetails.VisaValidFrom,
                        VisaValidTo = visaDetails.VisaValidTo,
                        EntryDate = visaDetails.EntryDate,
                        ExitDate = visaDetails.ExitDate,
                        BiometricNo = visaDetails.BiometricNo,
                        NumberOfPreviousVisits = visaDetails.NumberOfPreviousVisits,
                        CreateDate = DateTime.Now,
                        CreatedBy = visaDetails.CreatedBy,
                        ModifiedDate = DateTime.Now,
                        ModifiedBy = visaDetails.ModifiedBy                        
                    });
                }
            }

            visitorContext.SaveChanges();
            return visitor;
        }

        public Visitor Update(Guid id, Visitor visitor)
        {
            visitorContext.Visitors.ToList().Where(c => c.Id == visitor.Id).Select(item =>
                {
                    item.Id = visitor.Id;
                    item.FirstName = visitor.FirstName;                    
                    item.LastName = visitor.LastName;
                    item.PassportNo = visitor.PassportNo;
                    item.PassportValidFrom = visitor.PassportValidFrom;
                    item.PassportValidTo = visitor.PassportValidTo;
                    item.Nationality = visitor.Nationality;
                    item.EntryApproved = visitor.EntryApproved;
                    item.CreatedDate = visitor.CreatedDate;
                    item.CreatedBy = visitor.CreatedBy;
                    item.ModifiedDate = visitor.ModifiedDate;
                    item.ModifiedBy = visitor.ModifiedBy;
                    item.IsEUVisitor = visitor.IsEUVisitor;
                    return item;
                }).ToList();

            if (!visitor.IsEUVisitor)
            {
                var visaDetails = visitor.VisaDetails?.FirstOrDefault();

                if (visitor.VisaDetails != null && visitor.VisaDetails.Any())
                {
                    foreach (var item in visitor.VisaDetails)
                    {
                        visitorContext.VisaDetails.Remove(item);

                        visitorContext.VisaDetails.Add(new VisaDetail
                        {
                            VisaId = item.VisaId,
                            VisitorId = item.VisitorId,
                            VisaNo = item.VisaNo,
                            VisaValidFrom = item.VisaValidFrom,
                            VisaValidTo = item.VisaValidTo,
                            EntryDate = item.EntryDate,
                            ExitDate = item.ExitDate,
                            BiometricNo = item.BiometricNo,
                            NumberOfPreviousVisits = item.NumberOfPreviousVisits,
                            CreateDate = DateTime.Now,
                            CreatedBy = item.CreatedBy,
                            ModifiedDate = DateTime.Now,
                            ModifiedBy = item.ModifiedBy
                        });
                    }
                }
            }
            visitorContext.SaveChanges();

            return visitor;
        }
    }
}