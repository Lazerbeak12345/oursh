var N = null;var searchIndex = {};
searchIndex["oursh"]={"doc":"This shell should be both POSIX compatible and yet modern and exciting. Fancy features should not be prevented by POSIX compatibility. This will effect the design of the shell.","items":[[0,"job","oursh","Subprocess execution management.",N,N],[3,"Job","oursh::job","A command to be executed by various means.",N,N],[11,"new","","Create a new job from a program, obtained from the input file which is typically STDIN.",0,[[["program"]],["self"]]],[11,"run","","Run a shell job, waiting for the command to finish.",0,[[["self"]]]],[0,"program","oursh","Parser and interpreter for the syntax(es) of the shell.",N,N],[3,"Program","oursh::program","Source program representation, used mainly for parsing.",N,N],[12,"source","","TODO: This should be removed, and/or made private.",1,N],[11,"parse","","Create a new program from a line of the given reader.",1,[[["r"]],["self"]]],[11,"argv","","Return an `exec` style argv vector for this program.",1,[[["self"]],["vec",["cstring"]]]],[0,"repl","oursh","",N,N],[5,"prompt","oursh::repl","",N,[[["stdout"]]]],[5,"trap_sigint","","",N,[[],["result",["sigaction"]]]],[11,"into","oursh::job","",0,[[["self"]],["u"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"into","oursh::program","",1,[[["self"]],["u"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]]],"paths":[[3,"Job"],[3,"Program"]]};
initSearch(searchIndex);
