public class CFCalc {
    private static CFCalc calc = null;
    
    // CO2 Rates
    private int walkRate, cycleRate, gasCarRate, elecCarRate, busRate, trainRate; 

    // carpool/public transportation people count
    private int pplPerCar, pplPerBus, pplPerTrain;

    // distance in miles
    private int distance;

    private CFCalc() {
        CFCalc(-1);
    }

    private CFCalc(int distanceP) {
        fullReset();
        distance = distanceP;
    }

    /**==================================================================
     * 
     * Singleton Class Getting
     *
     *===================================================================
     */
    public static CFCalc getCFCalc() {
        if (calc == null) {
            calc = new CFCalc();
        }
        return calc;
    }

    public static CFCalc getCFCalc(int distance) {
        if (calc == null) {
            calc = new CFCalc(distance);
        } else {
            calc.setDistance(distance);
        }
        return calc;
    }


    private void checkValidDist() {
        throw new RunTimeException("Distance needs to be set before calculations.");
    }

    private void checkValidInput(int n) {
        if (n < 0) {
            throw new IllegarArgumentException("Input cannot be negative");
        }
    }






    /**
     * Sets the distance to input.
     * Input must be in miles
     */
    public void setDistance(int n) {
        distance = n;
    }

    /**
     * Resets the rate of the CO2 emission rates to default values.
     * Average values determined from online search.
     */
    public void resetRates() {
        // Rate Init
        walkRate = 0;
        cycleRate = 0;
        gasCarRate = 2.31; // kg CO2 per liter of gasoline

        //==============================
        // Average values will be searched later lol
    }

    /**
     * Resets the amount of ppl per transportation option.
     * Average values determined from online search.
     */
    public void resetPplCount() {
        // passenger amount Init
        pplPerCar = 1;
    }

    /**
     * 
     */
    public void fullReset() {
        resetRates();
        resetPplCount();
    }


    /** ======================================================================
     * 
     * Setters for rates and population
     * 
     * =======================================================================
     */
    public void setGasCarRate(int n) {
        checkValidInput(int n);
        gasCarRate = n;
    }

    public void setElecCarRate(int n) {
        checkValidInput(int n);
        elecCarRate = n;
    }

    public void setBusRate(int n) {
        checkValidInput(int n);
        busRate = n;
    }

    public void setTrainRate(int n) {
        checkValidInput(int n);
        trainRate = n;
    }

    public void setCarpool(int n) {
        checkValidInput(int n);
        pplPerCar = n;
    }

    public void setPplPerBus(int n) {
        checkValidInput(int n);
        pplPerBus = n;
    }

    public void setPplPerTrain(int n) {
        checkValidInput(int n);
        pplPerTrain = n;
    }



    /**================================================================================
     * 
     * Getters for all values lol
     * 
     * ================================================================================
     */
    public int getDistance() {
        return distance;
    }

    public int getWalkRate() {
        return walkRate;
    }

    public int getCycleRate() {
        return cycleRate;
    } 
    
    public int getGasCarRate() {
        return gasCarRate();
    }
    
    public int getElecCarRate() {
        return elecCarRate;
    } 
    
    public int getBusRate() {
        return busRate();
    } 
    
    public int getTrainRate() {
        return trainRate;
    } 

    public int getPplPerCar() {
        return pplPerCar;
    } 
    
    public int getPplPerBus() {
        return pplPerBus;
    }
    
    public int getPplPerTrain() {
        return pplPerTrain;
    }
}