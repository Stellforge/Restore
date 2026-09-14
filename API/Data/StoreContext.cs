using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{
 public required DbSet<Product> Products { get; set; }
    
}