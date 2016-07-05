$(function(){

    $('#tarefa').keydown(function(event){

        if(event.which === 13){
            console.log('Enter precionado');
        }
    });

    $('.tarefa-delete').click(onTarefaDelete);
})


function onTarefaDelete(){
    console.log("Adeus");
}
