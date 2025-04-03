let users = document.getElementById("users");

// Fetch and display user data
let readData = async () => {
    try {
        let response = await fetch(`/api/user/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        let result = await response.json();

        if (result.users) {
            printData(result.users);
        } else {
            console.log("No users found.");
        }
    } catch (err) {
        console.log("Error:", err);
    }
};

readData();

const deleteUser = async (id) => {
    if(window.confirm("Are you sure to delete user info")) {
        await fetch(`/api/user/delete/${id}`, {
            method: "DELETE",
            headers: {
                "content-type" : "application/json"
            }
        }).then(res => res.json())
        .then(res => {
            alert(res.msg)
            window.location.reload()
        }).catch(err => err.msg)
    } else {
        alert("Delete terminated")
    }
}

// Function to display user data in table
function printData(data) {
    let tableContent = "";

    data.forEach(item => {
        tableContent += `
            <tr class="text-center">
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.mobile}</td>
                <td>${item.age}</td>
                <td>${item.role}</td>
                <td>${item.address}</td>
                <td class="d-flex justify-content-around">
                    <a  href="/edit?id=${item._id}" class="btn btn-info">
                        <i  class="bi bi-pencil"></i>
                    </a>
                    <a class="btn btn-danger">
                        <i onclick=deleteUser('${item._id}')  class="bi bi-trash"></i>
                    </a>
                </td>
            </tr>`;
    });

    users.innerHTML = tableContent;
}