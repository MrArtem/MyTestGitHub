package Main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import CasheComponent.CasheComponent;
import CasheJuice.CasheJuice;
import Juice.Juice;
import MyComparator.MyComparatorCode;
import MyComparatorVolumnSymbol.MyComparatorJuice;

public class main {

	public static void main(String[] args) throws IOException, InterruptedException {
		// TODO Auto-generated method stub

		
		CasheJuice cashe = new CasheJuice();
		BufferedReader br = new BufferedReader(new FileReader(new File("juice.in"))); 
		while(br.ready())
		{
			cashe.add(new Juice(br.readLine()));
		}
		br.close();
		Thread thread = new Thread(cashe);
		cashe.setComparator(new MyComparatorJuice());
		thread.start();
		BufferedWriter bw = new BufferedWriter(new FileWriter(new File("juice3.out")));
		thread.join();
		bw.write(new Integer(cashe.countWash()).toString());
		bw.close();
		
		CasheComponent cComponent = CasheComponent.getInstance();
		cComponent.writeFileAlone(new File("juice1.out"));
		cComponent.writeAllFile(new File("juice2.out"));
		cashe.show();
			
	}

}
