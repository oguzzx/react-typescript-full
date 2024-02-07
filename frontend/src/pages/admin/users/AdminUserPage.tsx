import { useEffect, useState } from "react";
import { Popconfirm, Table, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  avatar: string;
}

function AdminUserPage() {
  const apiUrl = "http://localhost:5000";
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response = await fetch(`${apiUrl}/api/auth`);
        const data: User[] = await response.json();
        setUsers(data);
        setLoading(false);
      }, 1300);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(users);

  const handleDelete = async (key: string) => {
    try {
      const response = await fetch(`${apiUrl}/api/auth/${key}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Kullanıcı silindi");
        getUsers();
      } else {
        message.error("Kullanıcı silinemedi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text: string) => (
        <img
          src={text}
          alt="avatar"
          width="50"
          style={{
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      // delete butonu
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text: string, record: User) => (
        <Popconfirm
          title="Kullanıcıyı silmek istediğinize emin misiniz?"
          onConfirm={() => handleDelete(record._id)}
          okText="Evet"
          cancelText="Hayır"
        >
          <DeleteOutlined
            style={{
              color: "purple",
              fontSize: "20px",
            }}
          />
        </Popconfirm>
      ),
    },
  ];

  const data = users.map((user) => {
    return {
      key: user._id,
      username: user.username,
      email: user.email,
      role:
        user.role === "admin" ? (
          <span style={{ color: "green" }}>admin</span>
        ) : (
          <span style={{ color: "red" }}>user</span>
        ),
      avatar: user.avatar,
    };
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={data} loading={loading} />
    </div>
  );
}

export default AdminUserPage;
