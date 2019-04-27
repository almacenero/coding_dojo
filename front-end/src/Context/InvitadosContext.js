import React from 'react'
const InvitadosContext = React.createContext()

class  InvitadosProvider extends React.Component{
      constructor(props){
            super(props)
            this.state = {
                 arrayInvitados: [] 
            }
      }
      
      handleAddInvitado = (e,inv) =>{
            console.log(e.target.value)
            let arrayInvitados = this.state.arrayInvitados
            arrayInvitados.push(inv)
            this.setState({arrayInvitados})
      }
      render(){
            return(
                  < InvitadosContext.Provider value={{
                       arrayInvitados: this.state.arrayInvitados,
                       handleAddInvitado: this.handleAddInvitado
                  }}>
                  <div>{this.props.children}</div>
                  </ InvitadosContext.Provider>     
            )
      }
}

export { InvitadosProvider,  InvitadosContext}