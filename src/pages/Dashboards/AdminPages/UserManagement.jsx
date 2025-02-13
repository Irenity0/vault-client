const UserManagement = () => {
    return (
        <>
        <section className="min-h-screen text-[#560106] w-11/12 mx-auto py-10">
            <h1 className="text-[#560106] font-extrabold text-4xl mr-4">Manage Users</h1><br />

            {/* table */}
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#e4c8a2]">
              <table className="table">
                {/* head */}
                <thead className="text-black">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Balance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td className="underline">Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>$$$$</td>
                    <td><button className="bg-[#560106] btn btn-md">Block</button></td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td className="underline">Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>$$$$</td>
                    <td><button className="bg-[#560106] btn btn-md">Block</button></td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td className="underline">Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>$$$$</td>
                    <td><button className="bg-[#560106] btn btn-md">Block</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </section>
        </>
    );
};

export default UserManagement;