/*   
⦁ Crie um programa de cadastro de livros de uma loja (utilizando React). O programa deve implementar as funcionalidades descritas no texto abaixo:   
(0) - Crie o protótipo e anexe na atividade;   
(1) - Cadastrar livro;   
(2) - Pesquisar livro;   
O cadastro do  deve solicitar código do livro, titulo, autor, data. O programa deve respeitar as seguintes restrições:   
⦁ A pesquisa deve ser feita pelo código ou autor;    
⦁ A exclusão deve ser feita pela tabela de livros;   
(desafio) A tabela de livros deve apresentar quantos livros com o mesmo titulo existem na loja   
*/

import { useState } from 'react';
import './App.css';
import { FaTrashAlt } from 'react-icons/fa';

function App() {

  const [livros, setLivros] = useState([]); //BANCO

  const [codigo, setCodigo] = useState('')
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [data, setData] = useState('')
  const [pesquisaCodigo, setPesquisaCodigo] = useState('')


  const [codigoPesquisa, setCodigoPesquisa] = useState("");
  const [tituloPesquisa, setTituloPesquisa] = useState("");
  const [autorPesquisa, setAutorPesquisa] = useState("");
  const [dataPesquisa, setDataPesquisa] = useState("");

  const [inCadastro, setInCadastro] = useState(true);
  const [tituloInicio, setTituloInicio] = useState('Cadastro de Livros');


  function cadastrar() {
    let isThis = true
    livros.forEach(livro => {
      if (livro.codigo == codigo) {
        alert('CÓDIGO JÁ CADASTRADO!')
        isThis = false
      }
    });
    if (isThis) {
      let livro = {
        codigo: codigo,
        titulo: titulo,
        autor: autor,
        data: data,
      }
      //livros.push(livro)   
      setLivros([...livros, livro])
    }
    limparInputs()
  }

  function pesquisar() {
    let isThis = false
    if (!codigoPesquisa) {
      alert('Digite o código que deseja pesquisar!')
    } else {
      livros.forEach((livro) => {
        if (livro.codigo == codigoPesquisa) {
          setPesquisaCodigo(livro.codigo);
          setTituloPesquisa(livro.titulo);
          setAutorPesquisa(livro.autor);
          setDataPesquisa(livro.data);
          isThis = true
        }
      })
    }

    if (!isThis) {
      alert('Código não existe!')
    }


  }

  function limparInputs() {
    setCodigo('')
    setTitulo('')
    setAutor('')
    setData('')
  }

  function excluir(codigo) {
    livros.forEach((livro, index) => {
      if (livro.codigo == codigo) {
        livros.splice(index, 1);
      }
    });
    setLivros([...livros])
  }

  function titulosIguais() {
    let qtdIguais = 0

    livros.forEach((livroOne, indexOne) => {
      let isThis = false
      livros.forEach((livroTwo, indexTwo) => {
        if (livroOne.titulo == livroTwo.titulo && indexOne != indexTwo) {
          //comparar titulos iguais e não comparar com ele mesmo 
          isThis = true;
        }
      });

      if (isThis) {
        qtdIguais++
      }

    });
    return qtdIguais;
  }

  function onOff() { //Pesquisar ou Cadastrar
    if (inCadastro) {
      setInCadastro(false);
      setTituloInicio('Pesquisar Livros')
    } else {
      setInCadastro(true);
      setTituloInicio('Cadastro de Livros')
    }
  }

  return (
    
      <div className='containerMain'  >

        <div className="container" >
          <div className='tituloCadastro'>
            <div class="mt-10 sm:shadow-lg px-24 rounded-3xl flex flex-row justify-between items-center w-full h-20">
              <label for="large-toggle" class="inline-flex relative items-center cursor-pointer">
                <input onClick={onOff} type="checkbox" value="" id="large-toggle" class="sr-only peer"></input>
                <div class="w-16 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 dark:peer-focus:ring-blue-100 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[8px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-[#6A64F1]"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>

              <div className='tituloCadastro'>{tituloInicio}</div>
            </div>
          </div>

          {
            inCadastro && (
              <>

                <div class="sm:shadow-lg px-3 rounded-3xl "> {/*INPUTS CADASTRO */}

                  <div class="mx-auto w-full mt-8 ">
                    <div class="-mx-3 flex flex-wrap">
                      <div class="w-full px-3 sm:w-1/5">
                        <div class="mb-5">
                          <label
                            for="code"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Código
                          </label>
                          <input
                            onChange={((e) => { setCodigo(e.target.value) })} value={codigo}
                            type="text"
                            name="code"
                            id="code"
                            placeholder="Código"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/5">
                        <div class="mb-5">
                          <label
                            for="title"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Título
                          </label>
                          <input
                            onChange={((e) => { setTitulo(e.target.value) })} value={titulo}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Título"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/5">
                        <div class="mb-5">
                          <label
                            for="author"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Autor
                          </label>
                          <input
                            onChange={((e) => { setAutor(e.target.value) })} value={autor}
                            type="text"
                            name="author"
                            id="author"
                            placeholder="Autor"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/5">
                        <div class="mb-5">
                          <label
                            for="date"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Data
                          </label>
                          <input
                            onChange={((e) => { setData(e.target.value) })} value={data}
                            type="date"
                            name="date"
                            id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/5">
                        <label
                          for="date"
                          class="mb-9 block text-base"
                        >
                        </label>
                        <button
                          onClick={cadastrar}
                          class="hover:bg-[#706bf4] hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                        
                          Cadastrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <table class="w-full flex flex-row flex-no-wrap sm:bg-white sm:shadow-lg rounded-2xl overflow-hidden my-5 "> {/*TABELA CADASTRO*/}
                  <thead class="text-white">
                    <tr class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      <th class="p-3 text-left">Código</th>
                      <th class="p-3 text-left">Título</th>
                      <th class="p-3 text-left">Autor</th>
                      <th class="p-3 text-left">Data</th>
                      <th class="p-3 text-left">Excluir</th>
                    </tr>
                  </thead>
                  <tbody class="flex-1 sm:flex-none ">
                    {
                      livros.map((livro) => {
                        return (
                          <tr class="hover:bg-gray-100 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0  ">
                            <td class="p-3">{livro.codigo}</td>
                            <td class="p-3">{livro.titulo}</td>
                            <td class="p-3">{livro.autor}</td>
                            <td class="p-3">{livro.data}</td>
                            <td class="p-3  "><button onClick={() => excluir(livro.codigo)}><FaTrashAlt /></button></td>
                          </tr>

                        )
                      })
                    }

                    <tr class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      <th class="p-3 text-left">Livros com mesmo título: {titulosIguais()}</th>
                      <th class="p-3 text-left"></th>
                      <th class="p-3 text-left"></th>
                      <th class="p-3 text-left"></th>
                      <th class="p-3 text-left"></th>
                    </tr>

                  </tbody>
                </table>
                
              </>
            )
          }


          {
            !inCadastro && (

              <div className="containerPesquisa"> {/*PESQUISA*/}

                <div className='Inputpesquisa' class="  flex flex-wrap sm:shadow-lg px-3 rounded-3xl mt-5 ">
                  <div class="w-full  sm:w-1/4 mt-5 ">
                    <div class="mb-3">
                      <label
                        for="search"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Pesquisar
                      </label>
                      <input
                        onChange={((e) => { setCodigoPesquisa(e.target.value) })} value={codigoPesquisa}
                        type="text"
                        name="search"
                        id="search"
                        placeholder='Código'
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/5 ">
                    <label
                      for=""
                      class="mb-14 block text-base"
                    >
                    </label>
                    <button
                      onClick={pesquisar}
                      class="hover:bg-[#706bf4] hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Pesquisar
                    </button>
                  </div>

                </div>

                <table class="w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden  my-5 sm:shadow-lg  rounded-2xl">
                  <thead class="text-white">
                    <tr class=" hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      <th class="p-3 text-left">Código</th>
                      <th class="p-3 text-left">Título</th>
                      <th class="p-3 text-left">Autor</th>
                      <th class="p-3 text-left">Data</th>

                    </tr>
                  </thead>
                  <tbody class=" flex-1 sm:flex-none  ">


                    <tr class="hover:bg-gray-100 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0  ">
                      <td class="p-3">{pesquisaCodigo}</td>
                      <td class="p-3">{tituloPesquisa}</td>
                      <td class="p-3">{autorPesquisa}</td>
                      <td class="p-3">{dataPesquisa}</td>

                    </tr>

                  </tbody>
                </table>

              </div>
            )
          }


        </div>
      </div>
    
  );
}

export default App;