/*@author Ryan Rodrigues Andrade
*/

class carro{
    basecarro(ano,cor){
        this.ano=ano
        this.cor=cor
    }
    criarcarro(){
        console.log("🚗")
    }
    ligar(){
        console.log("O carro está ligado :)")
    }
    desligar(){
        console.log("O carro está deligado :(")
    }
    acelerar(){
        console.log("VRUUUMMM :D")
    }

    
}

const supragt = new carro("2007","Azul")

supragt.criarcarro()
supragt.ligar()
supragt.desligar()
supragt.acelerar()

const opala = new carro("1997","Preto")

opala.criarcarro()
opala.ligar()
opala.desligar()
opala.acelerar()



class aviao extends carro{
    basecarro(envergadura){
        
       this.envergadura=envergadura
    }
    criarcarro(){
        console.log("✈️")
    }
    ligar(){
        console.log("Ligou :D")
    }
    desligar(){
        console.log("Desligou :<")
    }
    aterricar(){
        console.log("Aterrisamos ")
    }
    acelerar(){
        console.log("SHSHSHSHSSHSHSHSSHSHSS :D")
    }
}

const boing108 = new aviao("188")

boing108.criarcarro()
boing108.ligar()
boing108.desligar()
boing108.acelerar()
boing108.aterricar()
