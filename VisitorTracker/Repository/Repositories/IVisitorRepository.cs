using Repository.DataDB;

namespace Repository.Repositories
{
    public interface IVisitorRepository
    {
        public IEnumerable<Visitor> GetAll();
        public Visitor Get(Guid id);
        public Visitor Create(Visitor visitor);
        public Visitor Update(Guid id, Visitor visitor);        
    }
}
