import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Typography,
  Box
} from "@mui/material";

const API_URL = "http://localhost:3001/api/alunos";

function App() {
  const [aluno, setAluno] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: ""
  });

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    buscarAlunos();
  }, []);

  const buscarAlunos = () => {
    axios.get(API_URL).then((res) => {
      setAlunos(res.data);
    });
  };

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL, aluno).then((res) => {
      setAlunos([...alunos, res.data]);
      setAluno({ nome: "", telefone: "", email: "", endereco: "" });
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Cadastro de Alunos</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField name="nome" label="Nome" value={aluno.nome} onChange={handleChange} required />
        <TextField name="telefone" label="Telefone" value={aluno.telefone} onChange={handleChange} required />
        <TextField name="email" label="Email" value={aluno.email} onChange={handleChange} required />
        <TextField name="endereco" label="Endereço" value={aluno.endereco} onChange={handleChange} required />
        <Button type="submit" variant="contained">Cadastrar</Button>
      </Box>

      <Typography variant="h6">Lista de Alunos</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Endereço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alunos.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.nome}</TableCell>
              <TableCell>{a.telefone}</TableCell>
              <TableCell>{a.email}</TableCell>
              <TableCell>{a.endereco}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default App;

