class Game{ 
    
    constructor(){
        this.playerScore = null;
        this.computerScore =null;
        this.restartBtn = null;
        this.container = null;
        this.score = { 
            player: 0,
            computer: 0
        };
        this.rock = null;
        this.paper = null;
        this.scissors= null;
        
        this.heder = null;
        this.turn = true;
        
        this.computerPick = null;
        
        this.result = null;
        this.modal = null;
        this.modal_p = null;
        this.modal_i = null;
    }
    async init(){
        this.playerScore = $('#barscore1');
        this.computerScore = $('#barscore2');
        this.restartBtn = $('#restartBtn');
        this.container = $('.container');
        

        this.rock = $('#rock');
        this.paper = $('#paper');
        this.scissors = $('#scissors')

        this.heder = $('#pick');
        this.modal =$('.modal')
        
        this.result = $('.modal-contant h1');
        this.modal_p = $('.modal p');
        this.modal_i = $('.modal i');
        
        this.addEventListeners();   
    }
    addEventListeners(){
        
        ///restart the score 
        this.restartBtn.click( ()=> {
            this.score.player = 0;
            this.score.computer = 0;
            
            this.playerScore.html('Player: '+ this.score.player);
            this.computerScore.html('Computer: '+ this.score.computer);


        });
        
        this.rock.on("click", ()=> {
            
            
            this.turn = false;
            this.rock.attr("disabled", true);
            // 1 == rock
            this.updateGame(1);
        });
        this.paper.on("click", ()=> {
            
            this.turn = false;
            this.paper.attr("disabled", true);
            //2 - paper
            this.updateGame(2);
        });
            //3 - scissors
        this.scissors.on("click", ()=>{
            this.turn = false;
            this.scissors.attr("disabled", true);
            this.updateGame(3);
        });
     
    }
    animateScren(){
        
        console.log(this.modal);
        console.log(this.heder);
        console.log($('.modal'));
        
        $('.container').css({'opacity' : '1'});
        $('.modal').animate({
            'font-size': '5px'
        });
        $('.modal').hide();
        
        $('#pick').show();
        $('#pick').animate({
            color: 'red',
            "font-size": '50px'
            
        });
        
    }
    
    ///val is represents => 1 - rock || 2 - paper ||3 - scissors
    updateGame(val){
            if(this.turn == true){
                this.heder.animate({
                        color: 'red',
                        "font-size": '50px'
                    });
                this.restartBtn.hide();
            }else{
                this.heder.hide();
                this.heder.css({"font-size": '10px'});
                this.restartBtn.show();
                
                var player = val;
                var computer = this.computerTurn();
                var choose = this.computerchose(computer);
                
                //compare 2 results
                
                if(player == 1 && computer == 2){
                    this.container.css({'opacity': '0.5'});                 
                    this.modal.show();
                    this.modal.animate({
                        'font-size': '25px'
                    })
                    this.result.html('Computer win');
                    this.modal_p.html(choose);
                    
                    //add score
                    this.score.computer += 1;
                    this.computerScore.html('Computer: ' + this.score.computer);
                    
                    //this.modal_i.html()
                    setTimeout(this.animateScren,2000);
                    
                    

                }
                else if(player == 1 && computer == 3){
                    
                    this.container.css({'opacity': '0.5'});
                    this.modal.show();
                    this.modal.animate({
                        'font-size': '25px'
                    })
                    this.result.html('You win !');                
                    this.modal_p.html(choose);
                    ///add score
                    this.score.player += 1;
                    this.playerScore.html('Player: '+ this.score.player);

                    //this.modal_i.html()
                    setTimeout(this.animateScren,2000);

                }
                else if(player == 2 && computer == 1){
                    this.container.css({'opacity': '0.5'});
                    
                    
                    this.modal.show();
                    this.modal.animate({
                        'font-size': '25px'
                    })
                    this.result.html('You win !');
                    this.modal_p.html(choose);
                    ///add score
                    this.score.player += 1;
                    this.playerScore.html('Player: '+ this.score.player);
                    //this.modal_i.html()
                  
                    setTimeout(this.animateScren,2000);

               
                }
                else if(player == 2 && computer == 3){
                    this.container.css({'opacity': '0.5'});
                   
                    
                    this.modal.show();
                    this.modal.animate({
                        'font-size': '25px'
                    })
                    this.result.html('Computer win !');
                    this.score.computer += 1;
                    this.computerScore.html('Computer: ' + this.score.computer);
                    this.modal_p.html(choose);
                    //this.modal_i.html()
                    setTimeout(this.animateScren,2000);
                }
                else if(player == 3 && computer == 1){
                    this.container.css({'opacity': '0.5'});
                   
                    
                    this.modal.show();
                    this.modal.animate({
                        'font-size': '25px'
                    })
                    this.result.html('Computer win !');
                    this.score.computer += 1;
                    this.computerScore.html('Computer: ' + this.score.computer);
                    this.modal_p.html(choose);
                    
                    //this.modal_i.html()
                    setTimeout(this.animateScren,2000);
                }
                else if(player == 3 && computer == 2){
                    this.container.css({'opacity': '0.5'});
                 
                    this.modal.show();
                    this.modal.animate({
                        'font-size': '25px'
                    })
                    this.result.html('You win !');
                    this.modal_p.html(choose);
                    ///add score
                    this.score.player += 1;
                    this.playerScore.html('Player: '+ this.score.player);
                    //this.modal_i.html()
                    setTimeout(this.animateScren,2000);
                }
                else{
                    
                    this.container.css({'opacity': '0.5'});
                    this.modal.show();
                    this.modal.animate({
                        'font-size': '25px'
                    })
                    this.result.html('Draw');
                    this.modal_p.html(choose);
                    //this.modal_i.html()
                    setTimeout(this.animateScren,2000);
                }
            }
    }
    computerTurn(){
        // 1 - rock || 2 - paper ||3 - scissors
        // computerPick will get random val from 1 to 3 
        this.computerPick = Math.floor(Math.random() * 3) +1 ;
        return this.computerPick;
    }
    computerchose(x){
        
        var list = ['Comouter chose rock','Comouter chose paper','Comouter chose scissors' ]
        if(x == 1){
            //show what computer pick 
            this.modal_i.removeClass();
            this.modal_i.addClass('fas fa-hand-rock fa-10x');
            return list[0];
        }
        if(x == 2){         
            this.modal_i.removeClass();
            this.modal_i.addClass('fas fa-hand-paper fa-10x');
            
            return list[1];
        }
        if(x == 3){
            
            this.modal_i.removeClass();
            this.modal_i.addClass('fas fa-hand-scissors fa-10x');
        
            return list[2];
        }
    }
    
}