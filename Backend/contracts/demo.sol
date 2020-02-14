pragma solidity ^0.4.18;

contract VoteSC {
    address organisme;
  struct candidat {
        uint id;
        string Nom;
        string Prenom;
        string Age ;
        uint256 nombreVoix;
    }
    candidat[] public candidatList;

  function VoteSC() public {
      organisme =msg.sender;
  }
  function ajouter_candidate(string Nom,string Prenom,string Age )  public {
            require( organisme == msg.sender);
            candidat memory nouveauCandidat = candidat(candidatList.length,Nom,Prenom,Age,0);
            candidatList.push(nouveauCandidat);

    }
  
 function informationCandidate(uint id_Condidat) public view returns(string, string,string,uint256) {
        return (candidatList[id_Condidat].Nom,candidatList[id_Condidat].Prenom,candidatList[id_Condidat].Age,candidatList[id_Condidat].nombreVoix);
    }
   function votePourCandidat(uint id_Condidat ) public {
    candidatList[id_Condidat].nombreVoix += 1;
  }

  function getCandidateList() constant public returns (uint) {
    return candidatList.length ;
  }
}
