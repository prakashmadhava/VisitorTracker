using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Repository.DataDB
{
    public partial class VisitorDBContext : DbContext
    {
        public VisitorDBContext()
        {
        }

        public VisitorDBContext(DbContextOptions<VisitorDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<VisaDetail> VisaDetails { get; set; } = null!;
        public virtual DbSet<Visitor> Visitors { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //TODO:: This connection string needs to be fetch from environment configuration
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=VisitorDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VisaDetail>(entity =>
            {
                entity.HasKey(e => e.VisaId)
                    .HasName("PK__VisaDeta__3D4AC2927D3C99E3");

                entity.Property(e => e.VisaId).ValueGeneratedNever();

                entity.Property(e => e.BiometricNo).HasMaxLength(50);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedBy).HasMaxLength(50);

                entity.Property(e => e.EntryDate).HasColumnType("datetime");

                entity.Property(e => e.ExitDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy).HasMaxLength(50);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.VisaNo).HasMaxLength(50);

                entity.Property(e => e.VisaValidFrom).HasColumnType("datetime");

                entity.Property(e => e.VisaValidTo).HasColumnType("datetime");
            });

            modelBuilder.Entity<Visitor>(entity =>
            {
                entity.ToTable("Visitor");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedBy).HasMaxLength(50);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.ModifiedBy).HasMaxLength(50);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Nationality).HasMaxLength(50);

                entity.Property(e => e.PassportNo).HasMaxLength(50);

                entity.Property(e => e.PassportValidFrom).HasColumnType("datetime");

                entity.Property(e => e.PassportValidTo).HasColumnType("datetime");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
