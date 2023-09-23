import { NavLink } from "react-router-dom";

const Users = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          Pricing
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Banh mi cornhole echo park skateboard authentic crucifix neutra tilde
          lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee
        </p>
      </div>
      <div className="w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="bg-gray-800 text-gray-100">
              <th className="px-4 py-3 tracking-wider font-medium text-sm">
                Name
              </th>
              <th className="px-4 py-3 tracking-wider font-medium text-sm">
                Email
              </th>
              <th className="px-4 py-3 tracking-wider font-medium text-sm">
                Roles
              </th>
              <th className="px-4 py-3 tracking-wider font-medium text-sm">
                Permissions
              </th>
              <th className="px-4 py-3 tracking-wider font-medium text-sm text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200">
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">superadmin@admin.com</td>
              <td className="px-4 py-3">Admin</td>
              <td className="px-4 py-3">Free</td>
              <td className="px-4 py-3 flex justify-center gap-3 items-center">
                <NavLink to={"/"}>Edit</NavLink>
                <NavLink to={"/"}>Delete</NavLink>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="px-4 py-3">Pro</td>
              <td className="px-4 py-3">25 Mb/s</td>
              <td className="px-4 py-3">25 GB</td>
              <td className="px-4 py-3 text-lg text-gray-900">$24</td>
              <td className="px-4 py-3 flex justify-center gap-3 items-center">
                <NavLink to={"/"}>Edit</NavLink>
                <NavLink to={"/"}>Delete</NavLink>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="px-4 py-3">Business</td>
              <td className="px-4 py-3">36 Mb/s</td>
              <td className="px-4 py-3">40 GB</td>
              <td className="px-4 py-3 text-lg text-gray-900">$50</td>
              <td className="px-4 py-3 flex justify-center gap-3 items-center">
                <NavLink to={"/"}>Edit</NavLink>
                <NavLink to={"/"}>Delete</NavLink>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="px-4 py-3">Exclusive</td>
              <td className="px-4 py-3">48 Mb/s</td>
              <td className="px-4 py-3">120 GB</td>
              <td className="px-4 py-3 text-lg text-gray-900">$72</td>
              <td className="px-4 py-3 flex justify-center gap-3 items-center">
                <NavLink to={"/"}>Edit</NavLink>
                <NavLink to={"/"}>Delete</NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
