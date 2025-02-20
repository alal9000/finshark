using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "03c65a54-c55d-41f2-8785-0871930ff09d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2edca82f-f54c-4fde-9ab7-538cae126ef5");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "03bce784-037f-4cef-b8bb-ab038ecc0991", null, "Admin", "ADMIN" },
                    { "72c68949-7b8c-4f07-88c2-599b7cba7022", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "03bce784-037f-4cef-b8bb-ab038ecc0991");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "72c68949-7b8c-4f07-88c2-599b7cba7022");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "03c65a54-c55d-41f2-8785-0871930ff09d", null, "User", "USER" },
                    { "2edca82f-f54c-4fde-9ab7-538cae126ef5", null, "Admin", "ADMIN" }
                });
        }
    }
}
