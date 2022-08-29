package mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.helper;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.appointment.domain.exceptions.DivisionWithZeroException;
import mk.ukim.finki.emt.veterinary.appointment.domain.valueobjects.enumeration.WeightBaseUnit;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;

import javax.persistence.Embeddable;

//TODO CHECK
@Getter
public class Weight implements ValueObject {

    private final WeightBaseUnit baseUnit;
    private final double amount;

    public Weight(){
        this.baseUnit = WeightBaseUnit.KG;
        this.amount = 0.0;
    }

    public Weight(WeightBaseUnit baseUnit, double amount) {
        this.baseUnit = baseUnit;
        this.amount = amount;
    }

    public Weight weightToKg (Weight weight){
        if(weight.amount == 0.0){
            throw new DivisionWithZeroException("Division with zero");
        }
        return new Weight(WeightBaseUnit.KG,weight.amount / 2.2046);
    }

    public Weight weightToLbs (Weight weight){
        return new Weight(WeightBaseUnit.LBS,weight.amount * 2.2046);
    }

}
