// document.write('Olá, Mundo!' + Date());
var quebrada = false;

function mudaLampada(tipo) {
    if (tipo == 1) {
        arquivo = "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=360&dpr=1"
    }

    if (tipo == 2) {
        arquivo = "https://images.pexels.com/photos/4792503/pexels-photo-4792503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=360&dpr=1";
    }

    if (tipo == 3) {
        arquivo = "https://images.pexels.com/photos/128665/pexels-photo-128665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=360&dpr=1";
    }

    if (!quebrada) {
        document.getElementById('luz').src = arquivo;
        if (tipo == 3) {
            quebrada = true;
        }
    }

}
