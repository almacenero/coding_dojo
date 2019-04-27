import React from 'react'
const VisibilidadContext = React.createContext()

class  VisibilidadProvider extends React.Component{
      constructor(props){
            super(props)
            this.state = {
                  openForm: true,
                  hiddenButton: false  
            }
      }
      
      handleOpenForm =  () => {
            this.setState({openForm:true})
            this.setState({hiddenButton:false})
          };
      handleHiddenButton =  () => {
            this.setState({hiddenButton: true})
            this.setState({openForm:false})
          };
      render(){
            return(
                  < VisibilidadContext.Provider value={{
                        openForm: this.state.openForm,
                        hiddenButton: this.state.hiddenButton,
                        handleHiddenButton: this.handleHiddenButton,
                        handleOpenForm: this.handleOpenForm

                  }}>
                  <div>{this.props.children}</div>
                  </ VisibilidadContext.Provider>     
            )
      }
}

export { VisibilidadProvider,  VisibilidadContext}